const { JSDOM } = require("jsdom");
const fs = require("fs");

describe("Kino Bajda Website", () => {
  let dom;
  let document;

  beforeEach(() => {
    // Load the HTML content of the webpage
    const html = fs.readFileSync("bajda_kino/niebawem/index.htm", "utf8");

    // Simulate the DOM environment
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it("should have the correct page title", () => {
    const title = document.querySelector("title").textContent;
    expect(title).toBe("Niebawem w kinie Bajda");
  });

  it("should have a valid logo link", () => {
    const logoLink = document.querySelector(".logo a");
    expect(logoLink).not.toBeNull();
    expect(logoLink.href).toContain("index.htm");
  });

  it("should have a custom background image", () => {
    const body = document.querySelector("body");
    expect(body.style.backgroundImage).toContain("nsf_bayda3d.jpg");
  });

  it("should have navigation links", () => {
    const menuLinks = document.querySelectorAll("#menu-menyu a");
    expect(menuLinks.length).toBeGreaterThan(0);
    expect(menuLinks[0].textContent).toBe("GŁÓWNA");
  });

  it("should display movie posters", () => {
    const posters = document.querySelectorAll("img");
    expect(posters.length).toBeGreaterThan(0);
    expect(posters[0].src).toContain("Роббі-Вільямс_постер.jpg");
  });

  it("should have a footer with copyright", () => {
    const footer = document.querySelector("#footer");
    const copyrightText = footer.querySelector("#copyrights").textContent;
    expect(copyrightText).toContain("Kinoteatr Bajda");
  });
});