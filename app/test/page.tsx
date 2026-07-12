import Input from "@/components/ui/Input";

export default function TestPage() {
  return (
    <div className="max-w-lg mx-auto mt-20 space-y-6">

      <Input
        label="Full Name"
        placeholder="Afroz IT Solution"
      />

      <Input
        label="Email"
        type="email"
        placeholder="abc@gmail.com"
      />

      <Input
        label="Password"
        type="password"
        placeholder="********"
      />

      <Input
        label="Mobile Number"
        placeholder="9876543210"
      />

    </div>
  );
}