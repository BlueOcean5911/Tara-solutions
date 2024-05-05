// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
// import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

// auth-provider
import { SupabaseProvider as AuthProvider } from 'contexts/SupabaseContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    {/* <RTLLayout> */}
    <Locales>
      <ScrollTop>
        <Notistack>
          <AuthProvider>
            <>
              <Routes />
              <Snackbar />
            </>
          </AuthProvider>
        </Notistack>
      </ScrollTop>
    </Locales>
    {/* </RTLLayout> */}
  </ThemeCustomization>
);

export default App;
