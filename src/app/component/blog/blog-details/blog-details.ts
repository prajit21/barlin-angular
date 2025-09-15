import { Component } from "@angular/core";

import { BlogComment } from "./blog-comment/blog-comment";
import { BlogFilter } from "../widgets/blog-filter/blog-filter";

@Component({
  selector: "app-blog-details",
  imports: [BlogFilter, BlogComment],
  templateUrl: "./blog-details.html",
  styleUrls: ["./blog-details.scss"],
})
export class BlogDetails {}
