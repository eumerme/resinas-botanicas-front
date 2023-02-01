import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useUserData } from "../../hooks";
import { StyledButton } from "../../pages/Cart/CartElements";
import { checkoutApi } from "../../services/checkoutApi";

export function CheckoutButton({ cartItems }) {
  const {
    state: { userData },
  } = useUserData();

  const { mutate, data } = useMutation(async (items) => checkoutApi.createCheckout(items));

  const handleCheckout = () => {
    mutate({ cartItems, userId: userData.userId });
  };

  useEffect(() => {
    if (data) {
      window.location.href = data.url;

      if (data.url.slice(-4) === "cart") toast.error("Ocorreu um erro com sua transação, por favor tente novamente");
    }
  }, [data]);

  return <StyledButton onClick={handleCheckout}>Comprar</StyledButton>;
}
