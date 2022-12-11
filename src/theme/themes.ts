import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./addtions/card/Card";
import { MainPanelComponent } from "./addtions/layout/MainPanel";
import { PanelContainerComponent } from "./addtions/layout/PanelContainer";
import { PanelContentComponent } from "./addtions/layout/PanelContent";
import { badgeStyles } from "./components/badge";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { linkStyles } from "./components/link";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";

export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles,
  badgeStyles,
  linkStyles,
  inputStyles,
  CardComponent,
  MainPanelComponent,
  PanelContentComponent,
  PanelContainerComponent
);
