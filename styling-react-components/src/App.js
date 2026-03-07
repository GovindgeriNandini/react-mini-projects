import ProfileCardStyled  from "./components/ProfileCardStyled";

import ProfileCard  from "./components/ProfileCard";

import styled, {ThemeProvider} from "styled-components";

const theme = {
  color: {
    primary: "#667eea",
    secondary: "#764ba2",
    text: "#2d3748",
    textLight: "#4a5568",
    textMuted: "#a0aec0",
    border: "#e2c8f0",
    white: "#ffffff",
    shadow: "rgba(0, 0, 0, 0.1)",
  },

  spacing : {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full:'50%',
    xs  : "4px"
  },

  borderRadius : {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",

  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ProfileCard />
        {/* <ProfileCardStyled /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;