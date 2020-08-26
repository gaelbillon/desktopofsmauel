import React, { useEffect } from 'react';
import styled from "styled-components";

const CommentoDiv = styled.div`
  font-family: var(--font-primary) !important;
`;

// Helper to add scripts to our page
const insertScript = (src, id, parentElement, attrName, attrValue) => {
  if (typeof window !== "undefined") {
    const script = window.document.createElement('script');
    script.async = true;
    script.src = src;
    script.id = id;
    script.setAttribute(attrName, attrValue);
    parentElement.appendChild(script);
    return script;
  }
};
// Helper to remove scripts from our page
const removeScript = (id, parentElement) => {
  if (typeof window !== "undefined") {
    const script = window.document.getElementById(id);
    if (script) {
      parentElement.removeChild(script);
    }
  }
};
// The actual component
const Commento = ({ id }) => {
  useEffect(() => {
    // If there's no window there's nothing to do for us
    if (!window) {
      return;
    }
    const document = window.document;
    // In case our #commento container exists we can add our commento script
    if (document.getElementById('commento')) {
      insertScript(
        "http://35.238.35.192:8080/js/commento.js",
        "commento-script",
        document.body,
        "data-no-fonts",
        "true"
      );
    }
    // Cleanup; remove the script from the page
    return () => removeScript('commento-script', document.body);
  }, [id]);
  return (
    <CommentoDiv id={"commento"} />
  );
};
export default Commento;