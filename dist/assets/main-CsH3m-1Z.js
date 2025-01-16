(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const s of e)
      if (s.type === 'childList')
        for (const n of s.addedNodes) n.tagName === 'LINK' && n.rel === 'modulepreload' && r(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = u(e);
    fetch(e.href, s);
  }
})();
async function k() {
  return await (await fetch('./data/header.json')).json();
}
function T(a) {
  const o = document.querySelector('#navigation-menu'),
    u = document.createElement('nav');
  u.className = 'main-nav';
  const r = document.createElement('div');
  r.className = 'nav-left';
  const e = document.createElement('a');
  e.href = 'index.html';
  const s = document.createElement('img');
  (s.src = a.header.mainHeader.logo), (s.alt = a.header.mainHeader.alt), (s.className = 'nav-logo'), e.appendChild(s);
  const n = document.createElement('a');
  n.href = 'index.html';
  const i = document.createElement('span');
  (i.className = 'brand-name'),
    (i.textContent = a.header.mainHeader.brandName),
    n.appendChild(i),
    r.appendChild(e),
    r.appendChild(n);
  const c = document.createElement('div');
  c.className = 'nav-right';
  const l = document.createElement('button');
  (l.className = 'hamburger-btn'), (l.innerHTML = '<i class="fas fa-bars"></i>');
  const d = document.createElement('div');
  (d.className = 'menu-overlay'), (d.style.display = 'none');
  const t = document.createElement('div');
  t.className = 'overlay-blur';
  const m = document.createElement('div');
  m.className = 'overlay-logo';
  const p = document.createElement('button');
  (p.className = 'close-btn'), (p.innerHTML = '<i class="fas fa-times"></i>'), d.appendChild(p);
  const h = document.createElement('img');
  (h.src = a.header.hamburgerMenu.menuLogo),
    (h.alt = a.header.mainHeader.alt),
    (h.className = 'overlay-logo'),
    m.appendChild(h),
    d.appendChild(m);
  const f = document.createElement('ul');
  (f.className = 'menu-links'),
    a.header.hamburgerMenu.menuLinks.forEach((E) => {
      const g = document.createElement('li'),
        y = document.createElement('a');
      switch (E.text) {
        case 'Om oss':
          y.href = 'about.html';
          break;
        case 'Barnkalas':
          y.href = 'kids.html';
          break;
        default:
          y.href = '#';
      }
      (y.textContent = E.text), g.appendChild(y), f.appendChild(g);
    }),
    d.appendChild(f),
    l.addEventListener('click', () => {
      (d.style.display = 'block'), t.classList.add('active');
    }),
    p.addEventListener('click', () => {
      (d.style.display = 'none'), t.classList.remove('active');
    }),
    t.addEventListener('click', () => {
      (d.style.display = 'none'), t.classList.remove('active');
    }),
    c.appendChild(f.cloneNode(!0)),
    c.appendChild(l),
    u.appendChild(r),
    u.appendChild(c),
    o.appendChild(u),
    o.appendChild(d),
    o.appendChild(t);
}
async function S() {
  const a = await k();
  T(a);
}
const b = screen.width;
async function w() {
  try {
    const a = await fetch('./data/barnkalasEvent.json');
    if (!a.ok) throw new Error('Could not fetch data');
    const o = await a.json(),
      u = document.querySelector('.article-party');
    o.kalas.forEach((r) => {
      const e = document.createElement('div');
      e.classList.add('party-div'), u.append(e);
      const s = document.createElement('img');
      s.classList.add('party-img'), (s.src = r.image), (s.alt = r.imageAlt), e.append(s);
      const n = document.createElement('div');
      n.classList.add('party-styling'), e.append(n);
      const i = document.createElement('h2');
      i.classList.add('party-header'), (i.innerText = r.titel), n.append(i);
      const c = document.createElement('p');
      c.classList.add('party-text'), (c.innerText = r.description), n.append(c);
      const l = document.createElement('ol');
      l.classList.add('party-list'),
        n.append(l),
        r.content.forEach((m) => {
          const p = document.createElement('li');
          p.classList.add('party-listItem'), (p.innerText = m), l.append(p);
        });
      const t = document.createElement('button');
      t.classList.add('party-button'), (t.innerText = r.book), n.append(t);
    });
  } catch (a) {
    console.error(a);
  }
}
async function q() {
  try {
    const a = await fetch('./data/barnkalasContent.json');
    if (!a.ok) throw new Error('Could not fetch data');
    const o = await a.json(),
      u = document.querySelector('.div-hero'),
      r = document.querySelector('.article-kids');
    o.barnkalas.forEach((e) => {
      const s = document.createElement('img');
      s.classList.add('kids-hero'),
        b < 1280 ? (s.src = e.imgHero) : (s.src = e.imgHeroDesktop),
        (s.alt = e.imgAltHero),
        u.append(s);
      const n = document.createElement('img');
      n.classList.add('kids-img'),
        b < 1280 ? (n.src = e.imgTextMobile) : (n.src = e.imgTextDesktop),
        (n.alt = e.imgAltMobile),
        u.append(n);
      const i = document.createElement('div');
      i.classList.add('kids-div'), r.append(i);
      const c = document.createElement('h2');
      c.classList.add('kids-header'),
        b < 1280 ? (c.innerText = e.titelMobile) : (c.innerText = e.titelDesktop),
        i.append(c);
      const l = document.createElement('button');
      l.classList.add('kids-button'), (l.innerText = e.book), (l.type = 'button'), i.append(l);
      const d = document.createElement('h1');
      d.classList.add('kids-mainHeader'),
        b < 1280 ? (d.innerText = e.mainTitelMobile) : (d.style.display = 'none'),
        i.append(d);
      const t = document.createElement('p');
      t.classList.add('kids-text'),
        b < 1280 ? (t.innerText = e.descriptionMobile) : (t.innerText = e.descriptionDesktop),
        i.append(t);
    });
  } catch (a) {
    console.error(a);
  }
}
async function H() {
  w(), q();
}
async function N() {
  const a = await fetch('./data/movies.json');
  if (!a.ok) throw new Error(`HTTP-error! Status: ${a.status}`);
  const o = await a.json(),
    u = document.querySelector('.movie-container'),
    r = document.createElement('div');
  r.classList.add('modal'),
    (r.innerHTML = `
    <div class="modal-content">
      <i class="close-button fas fa-times"></i>
      <div class="modal-body"></div>
    </div>
  `),
    document.body.appendChild(r);
  const e = document.querySelector('.modal-body');
  document.querySelector('.close-button').addEventListener('click', () => {
    r.style.display = 'none';
  }),
    window.addEventListener('click', (n) => {
      n.target === r && (r.style.display = 'none');
    }),
    o.forEach((n) => {
      const i = document.createElement('div');
      i.classList.add('movie-card'), u.appendChild(i);
      const c = document.createElement('img');
      (c.src = n.Bild), (c.alt = `Bild för ${n.Titel}`), i.appendChild(c);
      const l = document.createElement('h2');
      (l.textContent = n.Titel), i.appendChild(l);
      const d = document.createElement('p');
      (d.textContent = n.Genre),
        i.appendChild(d),
        l.addEventListener('click', (t) => {
          t.stopPropagation(),
            (e.innerHTML = `
        <p><strong>Titel:</strong> ${n.Titel}</p>
        <p><strong>Genre:</strong> ${n.Genre}</p>
        <p><strong>Handling:</strong> ${n.Beskrivning}</p>
        <p><strong>Skådespelare:</strong> ${n.Skådespelare}</p>
        <p><strong>Språk:</strong> ${n.Språk}</p>
        <p><strong>Rating:</strong> ${n.Rating}</p>
        <p><strong>Speltid:</strong> ${n.Längd}</p>
        <p><strong>Rek. ålder:</strong> ${n.RekommenderadAlder}</p>
        <p><strong>Status:</strong> ${n.Label}</p>`),
            (r.style.display = 'block');
        });
    });
}
async function A() {
  const a = await fetch('data/moviesHeadline.json');
  if (!a.ok) throw new Error(`HTTP-error! Status: ${a.status}`);
  const o = await a.json(),
    u = document.querySelector('.movie-headline');
  u.textContent = o.HeadlineText;
}
async function M() {
  A(), N();
}
async function B() {
  return await (await fetch('./data/infoModal.json')).json();
}
async function j() {
  if (!(document.querySelector('.info') || document.querySelector('.information'))) return;
  const o = await B(),
    u = document.querySelector('.info-modal'),
    r = document.querySelector('.info-modal-list'),
    e = document.querySelector('.info');
  if (e) {
    const i = o.sections[0],
      c = document.querySelector('.cinema-title'),
      l = document.querySelector('.cinema-open'),
      d = document.createElement('button');
    (d.innerText = o.buttons[2].text), (c.innerText = i.title), (l.innerText = i.text);
    const t = document.querySelector('.kino-img'),
      m = document.querySelector('.info-2'),
      p = o.sections[1].modal,
      h = p[3].open,
      f = document.createElement('h3'),
      E = document.createElement('p');
    (f.innerText = p[3].title), (E.innerText = p[3].text), (t.src = o.kinoImg.src), (t.alt = o.kinoImg.alt);
    const g = document.createElement('div');
    g.appendChild(f),
      g.appendChild(E),
      g.setAttribute('class', 'open-div'),
      f.setAttribute('class', 'desktop-open-title'),
      E.setAttribute('class', 'desktop-open-paragraph'),
      h.forEach((y) => {
        const C = document.createElement('div'),
          v = document.createElement('p'),
          x = document.createElement('p'),
          L = document.createElement('p');
        C.setAttribute('class', 'open-times'),
          v.setAttribute('class', 'open-times-day'),
          x.setAttribute('class', 'open-times-date'),
          L.setAttribute('class', 'open-times-time'),
          (v.innerText = y.dag),
          (x.innerText = y.datum),
          (L.innerText = y.tid),
          C.appendChild(v),
          C.appendChild(x),
          C.appendChild(L),
          g.appendChild(C);
      }),
      m.prepend(g),
      e.appendChild(m);
  }
  const s = o.sections[1].modal;
  let n = 0;
  s.forEach((i) => {
    if (i.text == null) {
      const c = document.createElement('p');
      c.setAttribute('class', 'modal-title'), (c.innerText = i.title), u.prepend(c);
    } else {
      const c = document.createElement('li'),
        l = document.createElement('p'),
        d = document.createElement('p'),
        t = document.createElement('img');
      c.setAttribute('class', 'modal-item-' + n),
        n++,
        l.setAttribute('class', 'modal-question'),
        d.setAttribute('class', 'modal-answer'),
        t.setAttribute('class', 'modal-open'),
        (l.innerText = i.title),
        (d.innerText = i.text),
        (d.style.display = 'none'),
        (t.src = o.buttons[0].openButton),
        (t.alt = o.buttons[0].alt),
        c.appendChild(t),
        c.appendChild(l),
        t.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = o.buttons[1].closeButton), (t.alt = o.buttons[1].alt), (d.style.display = ''))
              : ((t.src = o.buttons[0].openButton), (t.alt = o.buttons[0].alt), (d.style.display = 'none'));
        }),
        l.addEventListener('click', () => {
          t.classList.toggle('open-button-clicked'),
            t.className === 'modal-open open-button-clicked'
              ? ((t.src = o.buttons[1].closeButton), (t.alt = o.buttons[1].alt), (d.style.display = ''))
              : ((t.src = o.buttons[0].openButton), (t.alt = o.buttons[0].alt), (d.style.display = 'none'));
        }),
        'open' in i
          ? i.open.forEach((m) => {
              const p = document.createElement('p'),
                h = document.createElement('p'),
                f = document.createElement('p'),
                E = document.createElement('div');
              E.setAttribute('class', 'open-times'),
                p.setAttribute('class', 'open-times-day'),
                h.setAttribute('class', 'open-times-date'),
                f.setAttribute('class', 'open-times-time'),
                (p.innerText = m.dag),
                (h.innerText = m.datum),
                (f.innerText = m.tid),
                E.appendChild(p),
                E.appendChild(h),
                E.appendChild(f),
                d.appendChild(E),
                c.appendChild(d),
                r.appendChild(c);
            })
          : (c.appendChild(d), r.appendChild(c));
    }
  });
}
(async function () {
  try {
    const u = await (await fetch('./data/footer.json')).json(),
      r = document.querySelector('.footer-container'),
      e = document.createElement('div');
    e.classList.add('sections-container'),
      u.footer.sections.forEach((c) => {
        const l = document.createElement('section');
        l.classList.add('footer-section');
        const d = document.createElement('h4');
        (d.textContent = c.title), l.append(d);
        const t = document.createElement('ul');
        c.contact
          ? c.contact.forEach((m) => {
              const p = document.createElement('li');
              (p.textContent = `E-post: ${m.mail}`), t.append(p);
              const h = document.createElement('li');
              (h.textContent = `Telefonnummer: ${m.phoneNumber}`), t.append(h);
            })
          : c.links
            ? c.links.forEach((m) => {
                const p = document.createElement('li');
                if (m.icon) {
                  const f = document.createElement('img');
                  (f.src = m.icon), (f.alt = `${m.text || m.name} icon`), f.classList.add('footer-icon'), p.append(f);
                }
                const h = document.createElement('a');
                (h.href = m.url),
                  (h.textContent = m.text || m.name),
                  h.classList.add('footer-a'),
                  p.append(h),
                  t.append(p);
              })
            : c.adress &&
              c.adress.forEach((m) => {
                const p = document.createElement('li');
                (p.textContent = m.street), t.appendChild(p);
                const h = document.createElement('li');
                (h.textContent = m.town), t.appendChild(h);
                const f = document.createElement('li'),
                  E = document.createElement('a');
                (E.href = m.url),
                  (E.textContent = m.findUs),
                  E.classList.add('footer-afind'),
                  f.appendChild(E),
                  t.appendChild(f);
              }),
          l.append(t),
          e.append(l);
      }),
      r.append(e);
    const s = document.createElement('span');
    s.classList.add('footer-logo-p'), r.append(s);
    const n = document.createElement('img');
    (n.src = u.footer.logo), (n.alt = 'Kino Bio Logo'), n.classList.add('footer-logo'), s.append(n);
    const i = document.createElement('p');
    (i.textContent = u.footer.text), i.classList.add('footer-logotext'), s.append(i);
  } catch (o) {
    console.error('error', o);
  }
})();
async function $() {
  const o = await (await fetch('./data/about.json')).json();
  return { mainHeadline: o.aboutUs, headline: o.headline, aboutPage: o.aboutPage };
}
async function P() {
  const { mainHeadline: a, headline: o, aboutPage: u } = await $();
  a && o && u && I(u, o, a);
}
function I(a, o, u) {
  if (!document.querySelector('.about-page')) return;
  const r = document.querySelector('.about-main-header'),
    e = document.createElement('h1');
  (e.textContent = u), r.appendChild(e);
  const s = document.querySelector('.about-header'),
    n = document.createElement('h2');
  (n.textContent = o), s.appendChild(n);
  const i = document.querySelector('.section-1'),
    c = document.createElement('h3');
  c.textContent = a[0].section;
  const l = document.createElement('p');
  (l.textContent = a[0].content), i.appendChild(c), i.appendChild(l);
  const d = document.querySelector('.section-2'),
    t = document.createElement('h3');
  t.textContent = a[1].section;
  const m = document.createElement('p');
  (m.textContent = a[1].content), d.appendChild(t), d.appendChild(m);
  const p = document.querySelector('.section-3'),
    h = document.createElement('h3');
  h.textContent = a[2].section;
  const f = document.createElement('p');
  (f.textContent = a[2].content), p.appendChild(h), p.appendChild(f);
  const E = document.querySelector('.section-4'),
    g = document.createElement('h3');
  g.textContent = a[3].section;
  const y = document.createElement('p');
  (y.textContent = a[3].content), E.appendChild(g), E.appendChild(y);
}
P();
S();
const O = document.querySelector('.article-kids');
O && H();
const U = document.querySelector('.movie-container');
U && M();
(document.querySelector('.info') || document.querySelector('.info-modal')) && j();
