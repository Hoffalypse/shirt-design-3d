import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    hover: "Shirt Color",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    hover: "Upload Image",
  },
  {
    name: "aipicker",
    icon: ai,
    hover: "Create With AI ",
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    hover: "Toggle Logo",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    hover: "Toggle Shirt",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
