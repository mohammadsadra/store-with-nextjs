import {ProductProvider} from "@/ProductProvider";

export default function App({ Component, pageProps }) {
  return <ProductProvider><Component {...pageProps} /></ProductProvider>;
}
