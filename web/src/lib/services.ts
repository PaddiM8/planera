import {AuthenticationClient, UserClient, ProjectClient, TicketClient, IConfig} from "../gen/planeraClient";

const serverUrl = "http://localhost:5065";

function extractToken(cookies: any): IConfig {
    return { token: cookies.get("token") ?? "{}" };
}

export function getAuthenticationClient(cookies: any): AuthenticationClient {
    return new AuthenticationClient(extractToken(cookies), serverUrl, { fetch });
}

export function getUserClient(cookies: any): UserClient {
    return new UserClient(extractToken(cookies), serverUrl, { fetch });
}

export function getProjectClient(cookies: any): ProjectClient {
    return new ProjectClient(extractToken(cookies), serverUrl, { fetch });
}

export function getTicketClient(cookies: any): TicketClient {
    return new TicketClient(extractToken(cookies), serverUrl, { fetch });
}
