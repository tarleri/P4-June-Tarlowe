"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const Post = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: Date;
    description: string;
  }) => {
    return (
      <Card
        isHoverable
        isPressable
        className="p-4 w-full"
        onPress={() => {
          addToast({
            title: "Hey!",
            description:
              "This doesn't link anywhere. But you can make it so it does!",
            color: "danger",
          });
        }}
      >
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
            {date.toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <div className="mt-20 flex flex-col gap-6">
        <Post
          date={new Date("2025-02-26")}
          description="An example post. You could do some cool stuff with this. This is a good example of using custom components within the same page."
          title="Example 1"
        />
        <Post
          date={new Date("2025-01-15")}
          description="Time machine sales are down! Demand decreases as AI take over."
          title="Time Machine Sales Statistics"
        />
      </div>
    </div>
  );
}
