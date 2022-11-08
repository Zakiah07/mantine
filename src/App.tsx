import './App.css';
import Cards from './Components/Cards';
import { ColorSchemeProvider, MantineProvider, Paper, ColorScheme } from "@mantine/core"
import LightAndDarkModeButton from './Components/LightDarkButton';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import Buttons from './Components/Buttons';
import ChipsExample from './Components/ChipsExample';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-clor-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['Ctrl+J', () => toggleColorScheme]])

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <Paper p="md" radius={0} style={{ minHeight: "100vh" }} >
            <LightAndDarkModeButton />
            <Cards />
            <Buttons />
            <ChipsExample />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </div >
  );
}

export default App;
