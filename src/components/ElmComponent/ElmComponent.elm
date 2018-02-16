module Main exposing (..)

import Html exposing (Html, text, p, div)


type alias Flags =
    { stuff : String
    }


type alias Model =
    Flags


type Msg
    = NoOp


main : Program Flags Model Msg
main =
    Html.programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( flags, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ p [] [ text "This was rendered with Elm!" ]
        , p [] [ text model.stuff ]
        ]
