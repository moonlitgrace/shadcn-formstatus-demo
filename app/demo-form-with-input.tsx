"use client";

import { useActionState } from "react";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";

import { testAction } from "./actions";

export default function DemoForm() {
  const [state, formAction, isPending] = useActionState(testAction, null);

  return (
    <div className="p-8">
      <form action={formAction}>
        <div className="flex flex-col gap-3 w-[300px] border rounded-lg p-3">
          <h2 className="font-bold">Form with Input</h2>
          <p className="text-neutral-500">
            This is a form with a shadcn/ui Input
            <br />
            useFormStatus() pending <span className="text-green-600">works</span>
          </p>
          <Input placeholder="Input element" />

          <Button disabled={isPending} type="submit">
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
      <pre>state: {state?.randomNumber && <>{state.randomNumber}</>}</pre>
    </div>
  );
}
