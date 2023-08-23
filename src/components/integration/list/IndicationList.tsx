import { useMemo } from "react";
import { IndicationType } from "../IndicationTypes";
import IndicationListRow from "./IndicationListRow";

type IntegrationListProps = {
  indications: IndicationType[] | null;
  search: string
};

const IndicationList = ({ indications = [], search }: IntegrationListProps) => {

  const FilteredData = useMemo(() =>{
    const searchToLowerCase = search?.toLowerCase();

    return indications?.filter((indication) =>
      indication.name.toLowerCase().includes(searchToLowerCase)
    );

  },[search, indications])

  const renderRows = () => {
    if (!indications || !indications.length) {
      return (
        <div className="flex items-center justify-center rounded-2xl">
        <div className="flex items-center justify-center mb-4 mt-10 border-2 border-gray-600 h-60 w-96 rounded-2xl">
          <h2 className="text-lg font-semibold text-gray-200">
          Comece agora e indique algo! 🚀
          </h2>
        </div>
      </div>
      )
    }

    return FilteredData?.map((indication) => {
      return <IndicationListRow key={indication._id} indication={indication} />;
    });
  };

  return (
    <>
      {renderRows()}
    </>
    );
};

export default IndicationList;
