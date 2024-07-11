import {RoutesEnum} from "../../router/routes.ts";

type HeaderLinkType = {
    title: string,
    link: RoutesEnum,

}

export const headerLinks:HeaderLinkType[] = [
    {title: 'Home page', link: RoutesEnum.home},
    {title: 'Catalog page', link: RoutesEnum.catalog},
    {title: 'Posts', link: RoutesEnum.posts}
]