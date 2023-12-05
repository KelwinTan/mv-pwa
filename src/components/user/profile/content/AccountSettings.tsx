import { GetCurrentlySignedInUser } from "@api/auth";
import { FormControl, FormLabel, Grid, Input, Select } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AccountSettings() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    GetCurrentlySignedInUser().then((user) => {
      if (user) {
        setAuthorized(true);
        setUser(user);
      } else {
        router.push("/");
      }
    });
  });

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={user?.displayName || "-"}
        />
      </FormControl>

      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder={user?.phoneNumber || "-"}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder={user?.email || "-"}
        />
      </FormControl>
    </Grid>
  );
}

export default AccountSettings;
