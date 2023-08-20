import { VIEWPORT_BREAKPOINT } from "../constants";
import { MainNavigation } from "./Navigation.styled";
import { NavigationItems } from "./NavigationItems";
import { navigationItems } from "./navigationTree";
import { useMainMenuController } from "./useNavigationController";

export function Navigation() {
  const { childItemProps, navigationProps } =
    useMainMenuController(VIEWPORT_BREAKPOINT);

  return (
    <MainNavigation {...navigationProps}>
      <NavigationItems {...childItemProps} items={navigationItems} />
    </MainNavigation>
  );
}
