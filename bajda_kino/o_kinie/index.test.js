/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Kino Bajda Website', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, 'index.htm'),
      'utf8'
    );
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('should have a footer with copyright', () => {
    const footer = document.querySelector('#footer');
    expect(footer).not.toBeNull();

    const copyright = document.querySelector('#copyrights');
    expect(copyright).not.toBeNull();
    expect(copyright.textContent).toContain('© 2025 Kinoteatr Bajda');
  });

  test('should have a navigation menu with all required links', () => {
    const menuItems = document.querySelectorAll('#menu-menyu li a');
    expect(menuItems).toHaveLength(5);

    const links = Array.from(menuItems).map((link) => link.textContent.trim());
    expect(links).toEqual([
      'Główna',
      'NIEBAWEM',
      'O KINIE',
      'KONTAKT',
      'REGULAMIN',
    ]);
  });

  test('should have a main image with the proper alt text', () => {
    const mainImage = document.querySelector('.logo img');
    expect(mainImage).not.toBeNull();
    expect(mainImage.alt).toBe('kino');
  });

  test('should display an embedded Google Map', () => {
    const iframe = document.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.src).toContain('https://www.google.com/maps/embed');
  });

  test('should list the advantages of the cinema', () => {
    const advantages = document.querySelectorAll('ul li');
    expect(advantages).not.toBeNull();
    expect(advantages).toHaveLength(8);

    const advantageTexts = Array.from(advantages).map((li) =>
      li.textContent.trim()
    );
    expect(advantageTexts).toContain('bardzo duży ekran;');
    expect(advantageTexts).toContain('system polaryzacji kołowej REAL3D;');
    expect(advantageTexts).toContain('dzwięk DOLBY DIGITAL SURROUND-EX;');
  });
});
