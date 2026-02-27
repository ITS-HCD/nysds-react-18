import {
  NysIconComponent,
  NysAvatarComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const IconsAvatarsSection = () => (
  <section id="icons-avatars">
    <h2 className="section-heading">Icons & Avatars</h2>
    <h3>Icons</h3>
    <div className="component-row">
      <NysIconComponent name="home" size="3xl" />
      <NysIconComponent name="search" size="3xl" />
      <NysIconComponent name="settings" size="3xl" />
      <NysIconComponent name="favorite" size="3xl" />
      <NysIconComponent name="check_circle" size="3xl" />
      <NysIconComponent name="info" size="3xl" />
    </div>
    <h3>Avatars</h3>
    <div className="component-row">
      <NysAvatarComponent initials="NY" aria-label="New York" />
      <NysAvatarComponent initials="AB" aria-label="Albany" />
      <NysAvatarComponent initials="JD" aria-label="Jane Doe" interactive />
    </div>
    <NysDividerComponent />
  </section>
);

export default IconsAvatarsSection;
