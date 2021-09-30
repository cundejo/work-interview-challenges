create table product
(
    id          serial
        constraint "PK_bebc9158e480b949565b4dc7a82"
            primary key,
    name        varchar not null,
    description varchar not null,
    price       integer not null,
    um          varchar not null,
    "createdAt" varchar not null,
    "viewCount" integer not null
);

alter table product
    owner to postgres;

INSERT INTO public.product (id, name, description, price, um, "createdAt", "viewCount") VALUES (3, 'Product 3', 'Product description', 4, 'u', '2021-09-23T03:43:28.082Z', 7);
INSERT INTO public.product (id, name, description, price, um, "createdAt", "viewCount") VALUES (1, 'Product 1', 'Product description', 13, 'u', '2021-09-23T03:43:28.082Z', 1);
INSERT INTO public.product (id, name, description, price, um, "createdAt", "viewCount") VALUES (2, 'Product 2', 'Product description', 5, 'u', '2021-09-23T03:43:28.082Z', 5);