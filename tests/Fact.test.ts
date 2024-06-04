//@vitest-environment nuxt
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import FactPage from "../pages/index.vue";

describe("Fact", () => {
  test("can mount the component", async () => {
    const component = await mountSuspended(FactPage);
    expect(component).toBeDefined();
  });

  test("renders the header with correct text", async () => {
    const component = await mountSuspended(FactPage);
    const header = component.find("header");
    expect(header.text()).toBe("THE DEFSAFE CAT FACTS PAGE");
  });
  test("displays loading message", async () => {
    const wrapper = mount(FactPage);
    expect(wrapper.find(".text-blue-light").text()).toBe("Loading...");
  });
});
