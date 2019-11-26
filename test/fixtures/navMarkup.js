const onlyH2Nav = `
  <nav class="scroll-nav" role="navigation">
    <ul class="scroll-nav__list">
      <li class="scroll-nav__item" data-sn-section="first-heading">
        <a href="#first-heading" class="scroll-nav__link">First heading</a>
      </li>
      <li class="scroll-nav__item" data-sn-section="second-heading">
        <a href="#second-heading" class="scroll-nav__link">Second heading</a>
      </li>
      <li class="scroll-nav__item" data-sn-section="3rd-heading">
        <a href="#3rd-heading" class="scroll-nav__link">3rd heading</a>
      </li>
    </ul>
  </nav>`;

const allNav = `
  <nav class="scroll-nav" role="navigation">
    <ol class="scroll-nav__list">
      <li class="scroll-nav__item" data-sn-section="first-heading">
        <a href="#first-heading" class="scroll-nav__link">First heading</a>
      </li>
      <li class="scroll-nav__item" data-sn-section="second-heading">
        <a href="#second-heading" class="scroll-nav__link">Second heading</a>
        <ol class="scroll-nav__sub-list">
          <li class="scroll-nav__sub-item" data-sn-section="second-heading__1">
            <a class="scroll-nav__sub-link" href="#second-heading__1">
              First sub-heading of the second heading
            </a>
          </li>
        </ol>
      </li>
      <li class="scroll-nav__item" data-sn-section="3rd-heading">
        <a href="#3rd-heading" class="scroll-nav__link">3rd heading</a>
      </li>
    </ol>
  </nav>`;

export { onlyH2Nav, allNav };
