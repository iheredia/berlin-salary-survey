import App from "@/components/app";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home2023(props: PageProps) {
  return <App year={2023} embed={!!props.searchParams.embed} />;
}
