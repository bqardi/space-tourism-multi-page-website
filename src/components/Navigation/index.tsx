import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { IconClose, IconHamburger } from "../Svg";

import "./style.scss";

function Navigation() {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const lastNavLink = useRef<HTMLAnchorElement>(null);
  useClickOutside([listRef, burgerButtonRef], () => setOpen(false));

  function clickHandler(
    e: React.MouseEvent<HTMLOListElement> & {
      target: HTMLOListElement;
    }
  ) {
    e.target.classList.contains("Navigation__link") && setOpen(false);
  }
  function keyDownHandler(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "Escape") {
      setOpen(false);
      burgerButtonRef.current?.focus();
    }
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === burgerButtonRef.current) {
        e.preventDefault();
        burgerButtonRef.current?.focus();
        setOpen(false);
      }
      if (!e.shiftKey && document.activeElement === lastNavLink.current) {
        setOpen(false);
      }
    }
  }

  return (
    <nav
      className={open ? "Navigation Navigation--open" : "Navigation"}
      onKeyDown={keyDownHandler}
      aria-label="Primary menu"
    >
      <button
        ref={burgerButtonRef}
        className="Navigation__button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        aria-expanded={open}
        aria-controls="navigation-list"
      >
        {open ? <IconClose /> : <IconHamburger />}
      </button>
      <ol
        className="Navigation__list"
        id="navigation-list"
        ref={listRef}
        onClick={clickHandler}
      >
        <li className="Navigation__item">
          <NavLink className={linkHandler} to="/">
            Home
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink className={linkHandler} to="/destination/moon">
            Destination
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink className={linkHandler} to="/crew">
            Crew
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink ref={lastNavLink} className={linkHandler} to="/technology">
            Technology
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}

function linkHandler({ isActive }: { isActive: boolean }) {
  return isActive
    ? "Navigation__link Navigation__link--active"
    : "Navigation__link";
}

export default Navigation;
