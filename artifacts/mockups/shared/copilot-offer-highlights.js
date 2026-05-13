(function () {
  const DATA = window.OFFER_HIGHLIGHTS_MOCK;

  const MODE_LABELS = {
    retail: {
      action: "Buy",
      cardAction: "View details",
      priceDescriptor: "Lowest price",
      offerNoun: "Store",
      variantFallback: "Option",
      availability: "Arrives",
      save: "Track price"
    },
    subscription: {
      action: "Visit",
      cardAction: "View details",
      priceDescriptor: "Starting at",
      offerNoun: "Partner",
      variantFallback: "Plan",
      availability: "Available",
      save: "Save"
    }
  };

  const icon = {
    menu: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h13M4 18h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5h5v5M10 14l9-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    attach: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    send: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="3"/></svg>',
    bookmark: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 5.8A2.3 2.3 0 0 1 9.3 3.5h5.4A2.3 2.3 0 0 1 17 5.8v14.1l-5-3.1-5 3.1V5.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    external: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5h5v5M10 14l9-9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  let selectedIndex = 0;
  let selectedGalleryIndex = 0;

  function text(value, fallback = "") {
    return value === undefined || value === null || value === "" ? fallback : String(value);
  }

  function escapeHtml(value) {
    return text(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeUrl(value) {
    const url = text(value, "#");
    if (/^(https?:|mailto:|#)/.test(url)) return url;
    return url;
  }

  function initials(value) {
    return text(value)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "OH";
  }

  function labels() {
    return {
      ...MODE_LABELS[DATA.mode || "subscription"],
      ...(DATA.labels || {})
    };
  }

  function primaryImageFor(item) {
    return item.heroImage || item.image || galleryFor(item)[0] || "";
  }

  function galleryFor(item) {
    const gallery = [
      item.heroImage,
      ...(Array.isArray(item.gallery) ? item.gallery : []),
      item.image
    ];
    return gallery.filter(Boolean).filter((image, index, images) => images.indexOf(image) === index);
  }

  function logoHtml(item, fallbackText) {
    if (item.brandLogo) {
      return `<img src="${escapeHtml(item.brandLogo)}" alt="" loading="lazy" />`;
    }
    return escapeHtml(initials(fallbackText || item.brand));
  }

  function logoClass(item, baseClass) {
    return `${baseClass}${item.brandLogo ? " has-image" : ""}`;
  }

  function allOffers(item) {
    const detail = item.detail || {};
    const offers = [];
    if (detail.primaryOffer) offers.push(detail.primaryOffer);
    return offers;
  }

  function renderShell(root) {
    root.className = "oh-shell";
    root.innerHTML = `
      <nav class="oh-rail" aria-label="Copilot navigation">
        <span class="oh-copilot-mark" aria-hidden="true"></span>
        <button class="oh-rail-button is-active" type="button" aria-label="Chat">${railIcon("chat")}</button>
        <button class="oh-rail-button" type="button" aria-label="New chat">${railIcon("new")}</button>
        <button class="oh-rail-button" type="button" aria-label="Pages">${railIcon("pages")}</button>
        <button class="oh-rail-button" type="button" aria-label="Tasks">${railIcon("tasks")}</button>
        <div class="oh-rail-separator"></div>
        <button class="oh-rail-button" type="button" aria-label="Explore">${railIcon("explore")}</button>
        <button class="oh-rail-button" type="button" aria-label="Apps">${railIcon("apps")}</button>
        <div class="oh-rail-spacer"></div>
        <div class="oh-profile" aria-label="Account">${railIcon("profile")}</div>
      </nav>
      <main class="oh-main">
        <header class="oh-toolbar">
          <button class="oh-rail-button" type="button" aria-label="Share">${icon.share}</button>
        </header>
        <section class="oh-conversation" aria-label="${escapeHtml(DATA.meta?.title || "Offer Highlights mock")} conversation">
          <div class="oh-content">
            <div class="oh-day">Today</div>
            <div class="oh-prompt-row">
              <div class="oh-prompt">${escapeHtml(DATA.scenario?.userPrompt)}</div>
            </div>
            <section class="oh-answer">
              <p class="oh-answer-intro">${escapeHtml(DATA.scenario?.answerIntro)}</p>
              <h1 class="oh-module-heading">${escapeHtml(DATA.scenario?.moduleHeading || "Offer highlights")}</h1>
              <div class="oh-carousel-wrap">
                <div class="oh-carousel" id="oh-carousel" aria-live="polite"></div>
              </div>
              <ol class="oh-recap" id="oh-recap"></ol>
            </section>
          </div>
        </section>
        <div class="oh-composer-wrap">
          <form class="oh-composer" aria-label="Message Copilot">
            <input value="Ask me anything" aria-label="Message Copilot" />
            <button class="oh-icon-button" type="button" aria-label="Add attachment">${icon.attach}</button>
            <span class="oh-mode-pill">Quick response</span>
          </form>
        </div>
      </main>
      <aside class="oh-detail" aria-label="Offer details">
        <header class="oh-detail-header">
          <button class="oh-rail-button" type="button" aria-label="Collapse details">${icon.menu}</button>
          <strong>Details</strong>
            <button class="oh-rail-button" id="oh-detail-close" type="button" aria-label="Close details">${icon.close}</button>
        </header>
        <div class="oh-detail-body" id="oh-detail-body"></div>
      </aside>
      <button class="oh-next" id="oh-next" type="button" aria-label="Collapse details panel" title="Collapse details panel">${chevronRight()}</button>
    `;
  }

  function railIcon(name) {
    const icons = {
      chat: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M9 4v16" stroke="currentColor" stroke-width="1.7"/></svg>',
      new: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19h14M6 16.5V7a2 2 0 0 1 2-2h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m14 5 3 3-8 8H6v-3l8-8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
      pages: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="7" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M5 15V5h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      tasks: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="m8 12 2.5 2.5L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      explore: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.7"/><path d="m15 9-2.1 4.1L9 15l2.1-4.1L15 9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
      apps: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/></svg>',
      profile: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
    };
    return icons[name] || "";
  }

  function chevronRight() {
    return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function renderCards() {
    const carousel = document.getElementById("oh-carousel");
    const l = labels();
    carousel.innerHTML = DATA.items
      .map((item, index) => {
        const merchant = item.merchant || item.detail?.primaryOffer?.merchant || l.offerNoun;
        return `
          <button class="oh-card" type="button" data-index="${index}" aria-pressed="${index === selectedIndex}" style="--item-surface: ${escapeHtml(item.surface || "#f5f1ec")}; --merchant-color: ${escapeHtml(item.merchantColor || item.brandColor || "#277f72")}; --image-fit: ${escapeHtml(item.imageFit || "contain")}">
            <div class="oh-card-media">
              <img src="${escapeHtml(primaryImageFor(item))}" alt="${escapeHtml(item.imageAlt || item.productName || item.brand)}" loading="lazy" />
            </div>
            <div class="oh-card-body">
              <h2 class="oh-card-title">${escapeHtml(item.productName || item.brand)}</h2>
              <div class="oh-rating"><span class="oh-rating-star" aria-hidden="true"></span>${escapeHtml(item.rating)} (${escapeHtml(item.reviews)})</div>
              <div class="oh-merchant"><span class="${logoClass(item, "oh-merchant-logo")}">${logoHtml(item, merchant)}</span>${escapeHtml(merchant)}</div>
              <p class="oh-card-match">${escapeHtml(item.matchReason)}</p>
              <div class="oh-card-footer">
                <span class="oh-card-action">${escapeHtml(l.cardAction)}</span>
                <span class="oh-save-button" role="presentation" aria-label="${escapeHtml(l.save)}">${icon.bookmark}</span>
              </div>
            </div>
          </button>
        `;
      })
      .join("");
  }

  function renderRecap() {
    const recap = document.getElementById("oh-recap");
    const bullets = DATA.scenario?.recommendationBullets || [];
    recap.innerHTML = bullets
      .map((bullet) => `<li><strong>${escapeHtml(bullet.title)}</strong> <span>${escapeHtml(bullet.text)}</span></li>`)
      .join("");
  }

  function renderDetail() {
    const body = document.getElementById("oh-detail-body");
    const item = DATA.items[selectedIndex];
    const detail = item.detail || {};
    const l = labels();
    const gallery = galleryFor(item);
    const hero = gallery[selectedGalleryIndex] || primaryImageFor(item);
    const offers = allOffers(item);
    const uniqueValue = getUniqueValue(item);

    body.innerHTML = `
      <div class="oh-detail-media">
        <div class="oh-hero" style="--item-surface: ${escapeHtml(item.surface || "#f5f1ec")}; --image-fit: ${escapeHtml(item.imageFit || "contain")}">
          ${detail.badge ? `<span class="oh-disclosure-pill">${escapeHtml(detail.badge)}</span>` : ""}
          <img src="${escapeHtml(hero)}" alt="${escapeHtml(item.imageAlt || item.productName || item.brand)}" />
        </div>
        <div class="oh-thumbs" aria-label="Product images">
          ${gallery
            .map(
              (image, index) => `
                <button class="oh-thumb ${index === selectedGalleryIndex ? "is-active" : ""}" type="button" data-gallery-index="${index}" style="--item-surface: ${escapeHtml(item.surface || "#f5f1ec")}" aria-label="Show image ${index + 1}">
                  <img src="${escapeHtml(image)}" alt="" loading="lazy" />
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="oh-detail-main">
        <h2 class="oh-detail-title">${escapeHtml(item.productName || item.brand)}</h2>
        <div class="oh-detail-rating"><span class="oh-rating-star" aria-hidden="true"></span>${escapeHtml(item.rating)} (${escapeHtml(item.reviews)})</div>
        ${renderHighlights(item)}
        ${renderVariants(detail.variantGroups || [], l)}
        <div class="oh-section-label">${escapeHtml(l.priceDescriptor)}</div>
        <div class="oh-offer-list">
          ${offers.map((offer) => renderOffer(offer, l, item)).join("")}
        </div>
        ${renderUniqueValue(uniqueValue)}
        ${renderSponsoredOffer(item, l, uniqueValue)}
      </div>
    `;

    body.querySelectorAll("[data-gallery-index]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedGalleryIndex = Number(button.dataset.galleryIndex);
        renderDetail();
      });
    });
  }

  function renderHighlights(item) {
    const highlights = item.offerHighlights || item.attributes || [];
    if (!highlights.length) return "";
    return `
      <div class="oh-highlight-chips" aria-label="Offer highlights">
        ${highlights.map((highlight) => `<span class="oh-chip">${escapeHtml(highlight)}</span>`).join("")}
      </div>
    `;
  }

  function renderVariants(groups, l) {
    if (!groups.length) return "";
    return `
      <div class="oh-variants">
        ${groups
          .map(
            (group) => `
              <div class="oh-variant-row">
                <div class="oh-variant-label">${escapeHtml(group.label || l.variantFallback)}</div>
                <div class="oh-options">
                  ${(group.options || [])
                    .map((option, index) => `<button class="oh-option ${index === (group.selectedIndex || 0) ? "is-active" : ""}" type="button">${escapeHtml(option)}</button>`)
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderOffer(offer, l, item) {
    const merchant = offer.merchant || item.merchant || l.offerNoun;
    const color = offer.color || item.merchantColor || item.brandColor || "#277f72";
    return `
      <div class="oh-offer-row" style="--merchant-color: ${escapeHtml(color)}">
        <div class="${logoClass(item, "oh-offer-logo")}">${logoHtml(item, merchant)}</div>
        <div>
          <div class="oh-offer-name">
            ${escapeHtml(merchant)}
            ${offer.badge ? `<span class="oh-offer-badge">${escapeHtml(offer.badge)}</span>` : ""}
          </div>
          <div class="oh-offer-price">${escapeHtml(offer.price || item.priceLabel || "")}</div>
          ${offer.meta ? `<div class="oh-offer-meta">${escapeHtml(offer.meta)}</div>` : ""}
        </div>
        <a class="oh-cta" href="${escapeHtml(safeUrl(offer.url || item.ctaUrl || "#"))}" target="_blank" rel="noopener">${escapeHtml(offer.action || l.action)} ${icon.external}</a>
      </div>
    `;
  }

  function getUniqueValue(item) {
    const configured = item.detail?.uniqueValue;
    if (configured?.title && configured?.subtitle) {
      return {
        title: configured.title,
        subtitle: configured.subtitle,
        offer: configured.offer || `${item.brand} highlighted offer.`
      };
    }

    const copy = {
      "Wix Website Builder": ["DIY by design", "Ship a polished site. No dev required.", "Includes AI setup, SEO tools, and business-ready templates."],
      "Squarespace Website Builder": ["Polish first", "Launch with templates that already look finished.", "Premium designs and brand tools for a sharper first impression."],
      "GoDaddy Website Builder": ["Fast to live", "Go from idea to business site with fewer decisions.", "Guided setup, domain tools, and marketing basics in one flow."],
      "IONOS Website Builder": ["Bundled launch", "Site, hosting, and support in one path.", "Good for users who want fewer vendors to manage."],
      "SITE123 Website Builder": ["Simple by default", "Pick a template, fill it in, publish.", "A quick-start offer for a no-friction first website."],
      "HostGator Website Builder": ["Budget bundle", "Build and host without stretching setup costs.", "Promo pricing with hosting and templates included."],
      "BLUEAIR Pure 311i Max": ["Smoke-ready style", "Clean the air without making the room feel clinical.", "Lowest-price offer with fast delivery and smart controls."],
      "Coway Airmega AP-1512HH": ["Compact confidence", "Strong filtration in a smaller footprint.", "Value-led offer for simple smoke and allergen control."],
      "Levoit Core 400S": ["Smart sensing", "Let the purifier react when outdoor air changes.", "Sponsored smart-control offer with app-based monitoring."],
      "Dyson Purifier Big+Quiet": ["Design-led clean air", "A purifier that looks intentional in the room.", "Premium offer for quiet whole-room coverage."],
      "Winix 5500-2": ["Proven value", "High-review filtration for smoke and odors.", "Popular offer with carbon filtration and auto mode."],
      "Honeywell HPA300": ["Coverage first", "Prioritize room size and simple controls.", "Large-room offer with familiar HEPA performance."]
    };
    const [title, subtitle, offer] = copy[item.productName] || ["Best fit", item.matchReason, `${item.brand} highlighted offer.`];
    return { title, subtitle, offer };
  }

  function renderUniqueValue(value) {
    return `
      <section class="oh-unique-value">
        <h3>${escapeHtml(value.title)}</h3>
        <p>${escapeHtml(value.subtitle)}</p>
      </section>
    `;
  }

  function renderSponsoredOffer(item, l, value) {
    const offer = item.detail?.sponsoredOffer || item.detail?.primaryOffer || {};
    const merchant = offer.merchant || item.merchant || item.brand;
    const color = offer.color || item.merchantColor || item.brandColor || "#277f72";
    return `
      <section class="oh-sponsored-card" style="--merchant-color: ${escapeHtml(color)}">
        <div class="${logoClass(item, "oh-offer-logo")}">${logoHtml(item, merchant)}</div>
        <div>
          <span class="oh-sponsored-label">Sponsored</span>
          <h3>${escapeHtml(item.brand)} highlighted offer</h3>
          <p>${escapeHtml(value.offer)}</p>
        </div>
        <a class="oh-cta" href="${escapeHtml(safeUrl(offer.url || item.ctaUrl || "#"))}" target="_blank" rel="noopener">${escapeHtml(offer.action || l.action)} ${icon.external}</a>
      </section>
    `;
  }

  function renderPriceHistory(values) {
    if (!values.length) return "";
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = Math.max(1, max - min);
    return `
      <div class="oh-section-label">Price history</div>
      <div class="oh-price-history" aria-label="Price history preview">
        ${values
          .map((value) => {
            const height = 18 + ((max - value) / range) * 30;
            return `<span class="oh-price-bar" style="height: ${height}px"></span>`;
          })
          .join("")}
      </div>
    `;
  }

  function renderSources(sources) {
    if (!Array.isArray(sources) || !sources.length) return "";
    const first = sources[0];
    if (!first?.url) return "";
    return `<p class="oh-detail-note">Source reference: <a class="oh-source-link" href="${escapeHtml(first.url)}" target="_blank" rel="noopener">${escapeHtml(first.label || first.url)}</a></p>`;
  }

  function positionPanelToggle() {
    const root = document.getElementById("offerHighlightsApp");
    const button = document.getElementById("oh-next");
    const card = document.querySelector('.oh-card[aria-pressed="true"]') || document.querySelector(".oh-card");
    if (!root || !button || !card) return;

    const isCollapsed = root.classList.contains("is-detail-collapsed");
    if (isCollapsed) {
      button.style.removeProperty("--oh-toggle-top");
      return;
    }

    const cardRect = card.getBoundingClientRect();
    button.style.setProperty("--oh-toggle-top", `${Math.round(cardRect.top + cardRect.height / 2)}px`);
  }

  function queueTogglePosition() {
    window.requestAnimationFrame(positionPanelToggle);
  }

  function bindEvents() {
    document.getElementById("oh-next").addEventListener("click", () => {
      const root = document.getElementById("offerHighlightsApp");
      const isCollapsed = root.classList.toggle("is-detail-collapsed");
      document.getElementById("oh-next").setAttribute("aria-label", isCollapsed ? "Open details panel" : "Collapse details panel");
      document.getElementById("oh-next").setAttribute("title", isCollapsed ? "Open details panel" : "Collapse details panel");
      positionPanelToggle();
      queueTogglePosition();
    });

    document.getElementById("oh-detail-close").addEventListener("click", () => {
      const root = document.getElementById("offerHighlightsApp");
      root.classList.add("is-detail-collapsed");
      document.getElementById("oh-next").setAttribute("aria-label", "Open details panel");
      document.getElementById("oh-next").setAttribute("title", "Open details panel");
      positionPanelToggle();
      queueTogglePosition();
    });

    document.getElementById("oh-carousel").addEventListener("click", (event) => {
      const saveButton = event.target.closest(".oh-save-button");
      if (saveButton) {
        saveButton.classList.toggle("is-saved");
        return;
      }

      const card = event.target.closest(".oh-card");
      if (!card) return;
      const scrollLeft = document.getElementById("oh-carousel").scrollLeft;
      document.getElementById("offerHighlightsApp").classList.remove("is-detail-collapsed");
      document.getElementById("oh-next").setAttribute("aria-label", "Collapse details panel");
      document.getElementById("oh-next").setAttribute("title", "Collapse details panel");
      selectedIndex = Number(card.dataset.index);
      selectedGalleryIndex = 0;
      renderCards();
      document.getElementById("oh-carousel").scrollLeft = scrollLeft;
      renderDetail();
      positionPanelToggle();
      queueTogglePosition();
    });

    window.addEventListener("resize", queueTogglePosition);
    window.addEventListener("load", queueTogglePosition);
    document.querySelector(".oh-conversation")?.addEventListener("scroll", queueTogglePosition, { passive: true });
  }

  function renderMissing(root) {
    root.className = "oh-missing";
    root.innerHTML = `
      <h1>Missing mock data</h1>
      <p>This page expects a data file that sets <code>window.OFFER_HIGHLIGHTS_MOCK</code> before the shared renderer loads.</p>
    `;
  }

  function init() {
    const root = document.getElementById("offerHighlightsApp");
    if (!root) return;
    if (!DATA || !Array.isArray(DATA.items) || !DATA.items.length) {
      renderMissing(root);
      return;
    }

    document.title = DATA.meta?.title || document.title;
    renderShell(root);
    renderCards();
    renderRecap();
    renderDetail();
    bindEvents();
    positionPanelToggle();
    queueTogglePosition();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
