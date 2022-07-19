export type TProfileProps = {
  title: string,
  onLogout: () => void,
  onDelete: () => void,
  onProfileClick: () => void,
  isMenuOpened: boolean,
  isAnonymous: boolean,
  photoUrl: string,
};
