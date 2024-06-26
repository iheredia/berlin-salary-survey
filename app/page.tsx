import App from "@/components/app";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: PageProps) {
  return <App year={2024} embed={!!props.searchParams.embed} />;
}
