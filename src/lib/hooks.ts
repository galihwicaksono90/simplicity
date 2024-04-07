"use client"
import { useMemo, useState, useEffect, useRef, RefObject } from "react";

interface Args<T> extends IntersectionObserverInit {
  elementRef: RefObject<T>;
  freezeOnceVisible?: boolean;
}

type ReturnType = [boolean, IntersectionObserverEntry | undefined];

function useLazyLoader<T extends HTMLElement = HTMLDivElement>({
  elementRef,
  threshold = 1,
  root = null,
  rootMargin = "50%",
  freezeOnceVisible = true,
}: Args<T>): ReturnType {
  const observer = useRef<IntersectionObserver | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isClient = typeof window !== "undefined";
  const hasIOSupport = isClient && !!window.IntersectionObserver;
  const noUpdate = entry?.isIntersecting && freezeOnceVisible;
  const IOOptions = useMemo(() => ({ threshold, root, rootMargin }), [root, rootMargin, threshold]);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };
  useEffect(() => {
    const node = elementRef?.current;

    if (!hasIOSupport || noUpdate || !node) {
      return;
    }

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(updateEntry, IOOptions);

    const { current: currentObserver } = observer;

    currentObserver.observe(node);
    return () => {
      currentObserver.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, noUpdate, hasIOSupport, IOOptions]);

  return [!!entry?.isIntersecting, entry];
}

export { useLazyLoader };
