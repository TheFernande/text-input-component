import TextInput from "@/components/text-input";

import { textInputVariants } from "./input.data";

export default function Home() {
  return (
    <main className='gfe-main'>
      <div className='gfe-container'>
        {textInputVariants.map(input => (
          <TextInput
            key={input.id}
            withIconLeft={input.withIconLeft}
            isDisabled={input.isDisabled}
            isValid={input.isValid}
            {...input}
          />
        ))}
      </div>
    </main>
  );
}
