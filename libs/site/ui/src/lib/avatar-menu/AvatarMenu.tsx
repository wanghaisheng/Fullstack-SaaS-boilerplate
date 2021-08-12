import { Avatar, Link as ChakraLink, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import { RiSettings2Line, RiLogoutBoxLine } from "react-icons/ri";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarMenuProps {}

export function AvatarMenu(props: AvatarMenuProps) {
  const { t } = useTranslation("common");
  const [session] = useSession();

  const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    signOut();
  };

  return (
    <Menu {...props}>
      <MenuButton borderRadius="50%" _focus={{ boxShadow: "outline" }}>
        <Avatar src={session?.user?.image || undefined} h={7} w={7} />
      </MenuButton>
      <MenuList>
        <NextLink href="/settings" passHref>
          <MenuItem as={ChakraLink} icon={<Icon as={RiSettings2Line} boxSize={5} />}>
            {t("settings")}
          </MenuItem>
        </NextLink>
        <MenuDivider />
        <NextLink href="/api/auth/signout" passHref>
          <MenuItem as={ChakraLink} icon={<Icon as={RiLogoutBoxLine} boxSize={5} />} onClick={handleSignOut}>
            {t("sign-out")}
          </MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;
