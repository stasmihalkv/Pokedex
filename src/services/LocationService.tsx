import { createBrowserHistory, History } from "history";

class LocationService {
  public history: History;

  public init = (): void => {
    this.history = createBrowserHistory();
  };

  public push = (link: string): void => {
    this.history.push(link);
  };

  get pathname(): string {
    return document.location.pathname;
  }

  get params(): string {
    return "";
  }
}

export const locationService = new LocationService();
