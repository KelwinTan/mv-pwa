import {
  GetCurrentlySignedInUser,
  HandleGoogleProvider,
  HandleLogin,
} from "@api/auth";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoogleIcon } from "@components/icons/ProviderIcons";
import LoadingScreen from "@components/loader/LoadingScreen";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PasswordField } from "./PasswordField";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the home page or any other page you want after successful login
      router.push("/");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    handleLogin(email, password);
    router.push("/");
  };

  useEffect(() => {
    GetCurrentlySignedInUser().then((user) => {
      if (user) {
        router.push("/");
      } else {
        setAuthorized(true);
      }
    });
  });

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Google:", user);

      // Redirect to the home page or any other page you want
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return authorized ? (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Don t have an account?{" "}
            <Link color={"blue.400"} href={"/auth/register"}>
              Register
            </Link>{" "}
            ✌️
          </Text>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setEmail(event.currentTarget.value);
              }}
            />
          </FormControl>
          <PasswordField
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              setPassword(event.currentTarget.value);
            }}
          />
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Box position="relative" padding="3">
              <Divider />
            </Box>

            <ButtonGroup>
              <Button
                w={"full"}
                variant={"outline"}
                onClick={handleSignInWithGoogle}
                leftIcon={<GoogleIcon />}
              ></Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  ) : (
    <LoadingScreen />
  );
}

export default LoginCard;
