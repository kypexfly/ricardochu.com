"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <Button className="pl-1" onClick={() => router.back()} variant="ghost">
      <Icons.back className="mr-2" />
      Back
    </Button>
  );
};

export default ButtonBack;
