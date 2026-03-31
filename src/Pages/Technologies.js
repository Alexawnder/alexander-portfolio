import React from "react";
import { techCategories } from "../Details";

function Technologies() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Languages, tools, and technologies I work with
        </p>
      </section>
      <section className="pt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category) => (
          <div key={category.label}>
            <h2 className="text-dark-heading dark:text-light-heading text-lg font-semibold mb-3">
              {category.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="bg-greenbg text-green-text text-sm rounded-3xl px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
