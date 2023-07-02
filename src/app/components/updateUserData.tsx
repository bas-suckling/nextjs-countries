"use client";

import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const UpdateUserData = (props: {
  routeName: string;
  displayName: string;
}) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { routeName, displayName } = props;
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    [routeName]: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    console.log("onSubmit was triggered");
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }
      alert(`${displayName} successfully updated.`);
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormValues({ [routeName]: value });
  };

  return (
    <FormControl>
      <Stack gap={3}>
        <Input
          type="text"
          onChange={handleChange}
          value={formValues.routeName}
        />
        <Button
          isLoading={loading}
          type="submit"
          onClick={onSubmit}
          loadingText="Updating"
        >
          Update
        </Button>
      </Stack>
    </FormControl>
  );
};
