"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import Lenis from "lenis";
import { LenisContext } from "@/context/lenis/lenis.context";
import { useTheme } from "@/hooks/useTheme";
import { siteMenuItems } from "@/utils/site-menu-items";
import styles from "./SiteNavigation.module.css";

export default function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lenis } = useContext(LenisContext);
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const menuLenis = useRef<Lenis | null>(null);
  const destination = useRef<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const root = rootRef.current;
    const wrapper = scrollRef.current;
    const content = contentRef.current;
    const toggle = toggleRef.current;
    if (!root || !wrapper || !content) return;

    const pageLenis = lenis?.current?.lenis;
    const wasStopped = pageLenis?.isStopped;
    const page = document.querySelector("main");
    const wasInert = page?.inert ?? false;
    const previousOverflow = document.documentElement.style.overflow;
    pageLenis?.stop();
    document.documentElement.style.overflow = "hidden";
    if (page) page.inert = true;
    toggle?.focus({ preventScroll: true });

    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 650px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const links = Array.from(content.querySelectorAll<HTMLAnchorElement>("a"));
    const highlight = () => {
      const bounds = wrapper.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      const nearest = links.reduce<HTMLAnchorElement | null>((best, link) => {
        const distance = (element: HTMLElement) => {
          const rect = element.getBoundingClientRect();
          return Math.abs(rect.top + rect.height / 2 - center);
        };
        return !best || distance(link) < distance(best) ? link : best;
      }, null);
      links.forEach((link) => { link.dataset.active = String(link === nearest); });
    };

    const configureScroll = () => {
      menuLenis.current?.destroy();
      menuLenis.current = null;
      if (!desktop.matches) {
        wrapper.scrollTop = 0;
        links.forEach((link) => { delete link.dataset.active; });
        return;
      }
      const instance = new Lenis({
        wrapper,
        content,
        autoRaf: true,
        smoothWheel: !reducedMotion.matches,
        duration: 1.1,
        overscroll: false,
      });
      menuLenis.current = instance;
      instance.on("scroll", highlight);
      instance.resize();
      const range = Math.max(0, content.scrollHeight - wrapper.clientHeight);
      instance.scrollTo(range * (0.2 + Math.random() * 0.6), { immediate: true });
      highlight();
    };
    configureScroll();
    desktop.addEventListener("change", configureScroll);
    reducedMotion.addEventListener("change", configureScroll);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        .filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", configureScroll);
      reducedMotion.removeEventListener("change", configureScroll);
      menuLenis.current?.destroy();
      menuLenis.current = null;
      document.documentElement.style.overflow = previousOverflow;
      if (page) page.inert = wasInert;
      if (!wasStopped) pageLenis?.start();

      const href = destination.current;
      destination.current = null;
      if (!href) {
        toggle?.focus({ preventScroll: true });
        return;
      }
      requestAnimationFrame(() => {
        if (href.startsWith("#")) {
          const target = document.getElementById(href.slice(1));
          if (!target) return;
          window.history.pushState(null, "", href);
          if (pageLenis) {
            pageLenis.scrollTo(target, { offset: -24, immediate: reducedMotion.matches });
          } else {
            target.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth" });
          }
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        } else {
          router.push(href);
        }
      });
    };
  }, [open, lenis, router]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    destination.current = href;
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={styles.root}
      data-open={open}
      role={open ? "dialog" : undefined}
      aria-modal={open || undefined}
      aria-label={open ? "Main menu" : undefined}
    >
      <div id="site-menu" className={styles.overlay} inert={!open} aria-hidden={!open} data-lenis-prevent>
        <aside className={styles.identity}>
          <div className={styles.brand}>
            <p>Leonardo Leal</p>
            <span>Systems, structure<br />&amp; experience.</span>
          </div>
          <div className={styles.details}>
            <p>Thoughtful engineering.<br />Built to evolve.</p>
            <a href="mailto:leonardo.dsleal@gmail.com">leonardo.dsleal@gmail.com <ArrowUpRight size={16} aria-hidden="true" /></a>
            <span className={styles.availability}>Let’s build something that matters.</span>
          </div>
          <p className={styles.signature}>Independent thinking.<br />Connected systems.</p>
        </aside>

        <div className={styles.menuPanel}>
          <div ref={scrollRef} className={styles.scrollArea}>
            <nav ref={contentRef} className={styles.links} aria-label="Main navigation">
              {siteMenuItems.map((item) => (
                <a
                  key={item.index}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={(event) => navigate(event, item.href)}
                  onFocus={(event) => {
                    const instance = menuLenis.current;
                    const wrapper = scrollRef.current;
                    if (instance && wrapper) instance.scrollTo(event.currentTarget, {
                      offset: -(wrapper.clientHeight - event.currentTarget.offsetHeight) / 2,
                      immediate: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                    });
                  }}
                >
                  <span className={styles.linkName}>{item.name}</span>
                  <span className={styles.linkArrow}><ArrowUpRight aria-hidden="true" /></span>
                  <span className={styles.linkIndex}>{String(item.index).padStart(2, "0")}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className={styles.dock}>
        <button
          ref={toggleRef}
          type="button"
          className={styles.dockButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.menuIcon} aria-hidden="true"><span /><span /><span /></span>
        </button>
        <button
          type="button"
          className={styles.dockButton}
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
