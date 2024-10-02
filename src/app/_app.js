import Chakra from "./components/chakra";

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra>
      <Component {...pageProps} key={router.route} />
    </Chakra>
  );
}

export default MyApp;