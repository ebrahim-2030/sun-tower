import icon1 from "../assets/icons/icon (1).png";
import icon2 from "../assets/icons/icon (2).png";
import icon3 from "../assets/icons/icon (3).png";
import icon4 from "../assets/icons/icon (4).png";

interface SubLink {
  id: number;
  text: string;
  href: string;
  icon: string;
}

interface NavLink {
  id: number;
  text: string;
  href: string;
  sublinks?: SubLink[];
}

const NavLinks: NavLink[] = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "About",
    href: "/about",
  },
  {
    id: 3,
    text: "Properties",
    href: "/",

    sublinks: [
      {
        id: 1,
        text: "Best Properties Deals",
        href: "/property-deals",
        icon: icon1,
      },
      {
        id: 2,
        text: "Trending Listing",
        href: "/trending-listing",
        icon: icon2,
      },
      {
        id: 3,
        text: "Properties For Rent",
        href: "/rent",
        icon: icon3,
      },
      {
        id: 4,
        text: "Properties For Sale",
        href: "/sale",
        icon: icon4,
      },
    ],
  },
  {
    id: 4,
    text: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    text: "Contact",
    href: "/contact",
  },
];

export default NavLinks;
