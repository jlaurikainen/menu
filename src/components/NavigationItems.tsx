import { Menu } from "../symbols";
import { NavigationItem } from "./NavigationItem";
import {
  NavigationItemContainer,
  NavigationItemList,
  ToggleButton,
} from "./NavigationItems.styled";
import { NavigationTreeItem } from "./navigationTree";

type NavigationItemsProps = {
  items: NavigationTreeItem[];
  onCollapseSmallMenu: () => void;
  onExpandedChange: () => void;
};

export function NavigationItems(props: NavigationItemsProps) {
  const { items, onCollapseSmallMenu, onExpandedChange } = props;

  return (
    <NavigationItemContainer>
      <ToggleButton onClick={onExpandedChange}>
        <Menu fill="currentcolor" height={24} width={24} />
      </ToggleButton>

      <NavigationItemList>
        {items.map((item, index) => (
          <NavigationItem
            key={index}
            onClick={() => console.log(item.route)}
            onCollapseSmallMenu={onCollapseSmallMenu}
          >
            {item.label}
          </NavigationItem>
        ))}
      </NavigationItemList>
    </NavigationItemContainer>
  );
}
