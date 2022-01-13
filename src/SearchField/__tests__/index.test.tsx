import SearchField, { SEARCH_RESULTS_LABEL } from "..";
import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchField", () => {
  afterEach(() => {
    jest.useRealTimers();
  });
  test("show spinner when loading", () => {
    render(<SearchField />);

    // type search term
    userEvent.type(screen.getByRole("textbox"), "search term");

    // spinner should be visible
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
  test("show results when loaded", async () => {
    jest.useFakeTimers();

    render(<SearchField />);

    // type search term
    userEvent.type(screen.getByRole("textbox"), "search term");

    // see https://stackoverflow.com/a/62027748
    // @ts-ignore
    act(() => jest.advanceTimersByTime(600));

    // wait for data to be loaded
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"));

    // list of search result should be visible
    expect(
      screen.getByRole("list", { name: SEARCH_RESULTS_LABEL })
    ).toBeInTheDocument();
  });
  test("clear results when search term is changed", async () => {
    jest.useFakeTimers();

    render(<SearchField />);

    // type search term
    userEvent.type(screen.getByRole("textbox"), "search term");

    // see https://stackoverflow.com/a/62027748
    // @ts-ignore
    act(() => jest.advanceTimersByTime(1000));

    // clear input field
    userEvent.clear(screen.getByRole("textbox"));

    // list of search result should not be visible
    expect(
      screen.queryByRole("list", { name: SEARCH_RESULTS_LABEL })
    ).not.toBeInTheDocument();
  });
});
