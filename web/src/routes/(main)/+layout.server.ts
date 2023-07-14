import type {ServerLoadEvent} from "@sveltejs/kit";
import {getProjectClient} from "$lib/clients";
import {getUser} from "$lib/cookieParsing";
import type {ProjectDto} from "../../gen/planeraClient";

export async function load({ cookies }: ServerLoadEvent) {
    let response: ProjectDto[];
    try {
        response = await getProjectClient(cookies).getAll(getUser(cookies)!.userName);
    } catch (ex) {
        return {
            error: true
        };
    }

    return {
        projects: structuredClone(response),
        error: false,
    };
}