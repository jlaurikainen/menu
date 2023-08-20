import { ButtonHTMLAttributes, MouseEvent } from "react";
import { Icon } from "../symbols";
import { NavigationListItem } from "./NavigationItem.styled";

type NavigationItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onCollapseSmallMenu: () => void;
};

export function NavigationItem(props: NavigationItemProps) {
  const { onCollapseSmallMenu, ...rest } = props;

  function onClick(event: MouseEvent<HTMLButtonElement>) {
    onCollapseSmallMenu();
    rest.onClick?.(event);
  }

  return (
    <NavigationListItem>
      <button {...rest} onClick={onClick}>
        <Icon fill="currentcolor" height={24} width={24} />

        {rest.children}
      </button>
    </NavigationListItem>
  );
}
