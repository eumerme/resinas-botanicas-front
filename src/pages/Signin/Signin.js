import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LinkBox, StyledButton, Wrapper } from "../../components/Auth";
import { ThreeDots } from "react-loader-spinner";
import { Form } from "../../components/Auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { signinResolver } from "../../schemas";
import { Message, Top } from "../../components/shared";
import { useMutation } from "react-query";
import { userApi } from "../../services/userApi";

export function Signin() {
  const { search } = useLocation();
  const redirectToUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectToUrl ? redirectToUrl : "/";

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(signinResolver);

  const {
    isSuccess,
    isLoading,
    error,
    mutate,
    data: userData,
  } = useMutation(async (formData) => userApi.signin(formData));

  const submit = async (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (error) toast.error(error.response.data.message);

    if (isSuccess) {
      localStorage.setItem("resinasBotanicas", JSON.stringify(userData));
      toast.success("Login realizado com sucesso");
      navigate(redirect);
    }
  }, [error, isSuccess]);

  return (
    <>
      <Top>Faça login</Top>
      <Wrapper>
        {/*    {error && <h5 onClick={() => reset()}>{error}</h5>} */}

        <Form onSubmit={handleSubmit(submit)}>
          <input type="email" placeholder="Email" {...register("email")} disabled={isLoading} />
          {errors.email && <Message formError>{errors.email.message}</Message>}

          <input type="password" placeholder="Senha" {...register("password")} disabled={isLoading} />
          {errors.password && <Message formError>{errors.password.message}</Message>}

          <StyledButton type="submit" disabled={isLoading}>
            {isLoading && <ThreeDots color="#ffffff" height={13} width={51} />}
            {!isLoading && <>{"Entrar"}</>}
          </StyledButton>
        </Form>
      </Wrapper>

      <LinkBox>
        <Link to="/signup">Não tem uma conta? Cadastre-se!</Link>
      </LinkBox>
    </>
  );
}
