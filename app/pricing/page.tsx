"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>Pricing</h1>

      <p>Pricing? Boring!</p>

      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">Example Plans</h2>
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                $29.99 <span className="text-sm">/mo</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>1,000 monthly orders</li>
                <li>5,000 customer limit</li>
                <li>Manual bookkeeping and invoices</li>
                <li>Standard shipping</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                $59.99 <span className="text-sm">/mo</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Unlimited monthly orders</li>
                <li>100,000 customer limit</li>
                <li>AI powered bookkeeping and invoices</li>
                <li>Standard + Express shipping</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                Custom
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Unlimited monthly orders</li>
                <li>Unlimited customers</li>
                <li>Custom shipping</li>
                <li>AI tools</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Contact Us
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">FAQ</h2>
        <Accordion>
          <AccordionItem key={1} title="Why time machines?">
            Because noboody else sells them!
          </AccordionItem>
          <AccordionItem
            key={2}
            title="How many time machines do we sell per year?"
          >
            According to our 2063 statistics, we sold roughly 4800 time
            machines.
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
