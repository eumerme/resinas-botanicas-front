import { MagnifyingGlass } from "react-loader-spinner";
import { ContainerML } from "./Message";

export function Loading() {
  return (
    <ContainerML>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </ContainerML>
  );
}
