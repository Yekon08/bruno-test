// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for navigation documents */
interface NavigationDocumentData {
    /**
     * Name field in *navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Logo field in *navigation*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * TextBtn field in *navigation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.textbtn
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    textbtn: prismicT.KeyTextField;
    /**
     * LinkBtn field in *navigation*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.linkbtn
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkbtn: prismicT.LinkField;
    /**
     * LogoHover field in *navigation*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.logohover
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logohover: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * title field in *page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice;
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * LeftImg field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.leftimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    leftimg: prismicT.ImageField<never>;
    /**
     * RightImg field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.rightimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    rightimg: prismicT.ImageField<never>;
    /**
     * LinkBtn field in *Hero → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.linkbtn
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkbtn: prismicT.LinkField;
    /**
     * DescriptionCard field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.descriptioncard
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    descriptioncard: prismicT.RichTextField;
    /**
     * TextBtn field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.textbtn
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    textbtn: prismicT.KeyTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: navigation_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
    /**
     * Child Name field in *NavigationItem → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    child_name: prismicT.KeyTextField;
    /**
     * Child Link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    child_link: prismicT.LinkField;
    /**
     * Description field in *NavigationItem → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * icon field in *NavigationItem → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, Simplify<NavigationItemSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefaultItem, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice };
    }
}
