import {
  NysIcon,
  NysAvatar,
  NysDivider,
} from "@nysds/components/react";

const IconsAvatarsSection = () => (
  <section id="icons-avatars">
    <h2 className="section-heading">Icons & Avatars</h2>
    <h3>Icons</h3>
    <div className="component-row">
      <NysIcon name="home" size="3xl" />
      <NysIcon name="search" size="3xl" />
      <NysIcon name="settings" size="3xl" />
      <NysIcon name="favorite" size="3xl" />
      <NysIcon name="check_circle" size="3xl" />
      <NysIcon name="info" size="3xl" />
    </div>
    <h3>Avatars</h3>
    <div className="component-row">
      <NysAvatar initials="NY" aria-label="New York" />
      <NysAvatar initials="AB" aria-label="Albany" />
      <NysAvatar initials="JD" aria-label="Jane Doe" interactive />
    </div>
    <NysDivider />
  </section>
);

export default IconsAvatarsSection;
