module Main exposing (..)

import Html exposing (Html, text, p, div)


type alias Props =
    { stuff : String
    }


type alias Model =
    Props


type Action
    = NoOp


main : Program Props Model Action
main =
    Html.programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }


init : Props -> ( Model, Cmd Action )
init props =
    ( props, Cmd.none )


update : Action -> Model -> ( Model, Cmd Action )
update action model =
    ( model, Cmd.none )


view : Model -> Html Action
view model =
    div []
        [ p [] [ text "This was rendered with Elm!" ]
        , p [] [ text model.stuff ]
        ]
