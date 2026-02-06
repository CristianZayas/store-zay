/**
 * HTTP Status Codes organized by category.
 * Extend each category as needed when new status codes are required.
 */

export const HTTP_STATUS = {
    // 2xx - Success
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    // 3xx - Redirection
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    NOT_MODIFIED: 304,
    // 4xx - Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    // 5xx - Server Errors
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
} as const;

export type HttpStatusCode = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

/**
 * Human-readable messages for each HTTP status code.
 * Used for toast notifications and error displays.
 */

export const HTTP_STATUS_MESSAGES: Record<number, string> = {
    [HTTP_STATUS.BAD_REQUEST]: "La solicitud no es válida. Por favor, verifica la información ingresada.",
    [HTTP_STATUS.UNAUTHORIZED]: "Debes iniciar sesión para realizar esta acción.",
    [HTTP_STATUS.FORBIDDEN]: "No tienes permisos para acceder a este recurso.",
    [HTTP_STATUS.NOT_FOUND]: "El recurso solicitado no fue encontrado.",
    [HTTP_STATUS.METHOD_NOT_ALLOWED]: "Esta acción no está permitida.",
    [HTTP_STATUS.CONFLICT]: "Existe un conflicto con el estado actual del recurso.",
    [HTTP_STATUS.UNPROCESSABLE_ENTITY]: "Los datos proporcionados no son válidos.",
    [HTTP_STATUS.TOO_MANY_REQUESTS]: "Demasiadas solicitudes. Inténtalo nuevamente más tarde.",
    [HTTP_STATUS.INTERNAL_SERVER_ERROR]: "Ocurrió un error en el servidor.",
    [HTTP_STATUS.BAD_GATEWAY]: "El servidor recibió una respuesta inválida.",
    [HTTP_STATUS.SERVICE_UNAVAILABLE]: "El servicio no está disponible temporalmente.",
    [HTTP_STATUS.GATEWAY_TIMEOUT]: "El servidor tardó demasiado en responder.",
};

export function getHttpErrorMessage(status: number): string {
    return HTTP_STATUS_MESSAGES[status] ?? `Ocurrió un error inesperado (${status}).`;
}

/**
 * Category checkers for status codes.
 */
export function isSuccessStatus(status: number): boolean {
    return status >= 200 && status < 300;
}

export function isClientError(status: number): boolean {
    return status >= 400 && status < 500;
}

export function isServerError(status: number): boolean {
    return status >= 500 && status < 600;
}
