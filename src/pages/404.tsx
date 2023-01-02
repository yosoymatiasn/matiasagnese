import { ListDetailView } from "~/components/Layouts";
import { Detail } from "~/components/ListDetail/Detail";

function MissingPage() {
	return <Detail.Null />;
}

export default function FourOhFour() {
	return <ListDetailView list={null} hasDetail detail={<MissingPage />} />;
}
